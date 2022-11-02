const rating = document.querySelectorAll(".rating");
const ratingForm = document.querySelector(".rating-form");
const cardDesc = document.querySelector(".card-desc");
const cardHeader = document.querySelector(".card-header");
const cardImg = document.querySelector(".card-img");
const cardImg2 = document.querySelector(".card-img2");
const cardTop = document.querySelector(".card-top");
const resultSection = document.querySelector(".result-section");
const cardResult = document.querySelector(".card-result");

console.log("JAVASCRIPT IS RUNNING!");

for (let rate of rating) {
  rate.addEventListener("click", (e) => {
    rating.forEach((rate) => {
      rate.classList.remove("rating-clicked");
      rate.classList.remove("no-hover");
    });
    rate.classList.add("rating-clicked");
    rate.classList.add("no-hover");
  });
}

function changeText() {
  cardHeader.innerText = `Thank you!`;
  cardDesc.innerText = `We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`;
  cardImg.src = "./images/illustration-thank-you.svg";
  cardImg.classList.remove("card-img");
  cardImg.classList.add("card-img2");
  cardTop.classList.add("middle");
  cardHeader.classList.add("middle");
  cardDesc.classList.add("middle");
}

function showResult() {
  resultSection.style.display = "flex";
  resultSection.style.marginBottom = "-40px";
}

ratingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const ratingValue = document.querySelector(".rating-clicked").value;
  console.log(ratingValue);
  ratingForm.remove();
  changeText();
  showResult();
  cardResult.innerText = `You selected ${ratingValue} out of 5`;
  //cardResult.add();
  //cardImg.style.backgroundColor = "#1f2632";
  //cardImg.style.padding = "0";
});
