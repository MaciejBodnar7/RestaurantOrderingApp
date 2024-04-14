import { menuArray } from "./data.js";
const sectionTwo = document.getElementById("section-two");

const itemContainer = document.getElementById("item-container");

document.addEventListener("click", function (e) {
  if (e.target.id === "pizzaico") {
    orders(e.target.id);
  } else if (e.target.id === "hamburgerico") {
    orders(e.target.id);
  } else if (e.target.id === "beerico") {
    orders(e.target.id);
  }
});

const reder = () => {
  const renderItems = menuArray
    .map((item) => {
      return `
        <div class="item">
            <img src="${item.image}" />
            <div class="item-content">
                <h2 class="text-xl">${item.name}</h2>
                <p class="text-secondary text-sm tracking-wider">beef, cheese, lettuce</p>
                <p>$${item.price}</p>
            </div>
            <i class="fa-solid fa-circle-plus icon" id="hamburgerico"></i>
        </div>
        `;
    })
    .join("");
  return renderItems;
};

itemContainer.innerHTML = reder();
sectionTwo.style.display = "flex";

const orders = (item) => {
  if (item) {
  }
};
