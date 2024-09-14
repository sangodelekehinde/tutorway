let mobileslide = document.querySelector(".mobilenav");
let mobilebar = document.querySelector(".fa-bars");
let cancel = document.querySelector(".fa-xmark");

function loadeventlisteners() {
  mobilebar.addEventListener("click", active);
  cancel.addEventListener("click", passive);
}

function active(e) {
  e.preventDefault();
  mobileslide.style.left = "0";
  mobileslide.style.transition = "0.6s";
}

function passive(e) {
  e.preventDefault();
  mobileslide.style.left = "-300px";
}
loadeventlisteners();
