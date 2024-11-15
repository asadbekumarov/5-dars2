let Elrock = document.querySelector(".rock");
let Elpaper = document.querySelector(".paper");
let Elscissors = document.querySelector(".scissors");
let ELl0 = document.querySelector(".l0");
let ELl2 = document.querySelector(".l2");
let ELl5 = document.querySelector(".l5");
let photos = document.querySelectorAll(".photo img");

ELl0.style.display = "none";
ELl2.style.display = "none";
ELl5.style.display = "none";
photos.forEach((photo) => (photo.style.display = "none"));

function random() {
  photos.forEach((photo) => (photo.style.display = "none"));
  const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
  randomPhoto.style.display = "block";
  return randomPhoto;
}

function handleClick(userImage) {
  ELl0.style.display = "none";
  ELl2.style.display = "none";
  ELl5.style.display = "none";

  userImage.style.display = "block";

  random();
}

Elrock.addEventListener("click", function () {
  handleClick(ELl0);
});

Elpaper.addEventListener("click", function () {
  handleClick(ELl5);
});

Elscissors.addEventListener("click", function () {
  handleClick(ELl2);
});
