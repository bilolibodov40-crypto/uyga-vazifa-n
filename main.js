
const input = document.querySelector(".search-box input");
const cards = document.querySelectorAll(".card");

input.addEventListener("input", () => {
const value = input.value.toLowerCase();

cards.forEach(card => {
const name = card.querySelector("h3").textContent.toLowerCase();

if(name.includes(value)){
card.style.display = "block";
}else{
card.style.display = "none";
}
});
});

const buttons = document.querySelectorAll(".buy");

buttons.forEach(btn=>{
btn.addEventListener("click",()=>{
btn.style.background="green";
btn.innerText="Added";
});
});

