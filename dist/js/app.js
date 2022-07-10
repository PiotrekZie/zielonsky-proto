const card = document.querySelector(".frontcard");

card.addEventListener("click", function (e) {
  card.classList.toggle('flipped');
});