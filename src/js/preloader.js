// preloader
window.onload = (event) => {
  preloader.style.top = "-100%";
  setTimeout( ()=> preloader.style.transform = "scaleY(0)", 1000);
};
