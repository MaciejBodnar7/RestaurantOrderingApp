import { menuArray } from "./data.js";
const sectionTwo = document.getElementById("section-two");
sectionTwo.style.display = "none";

const itemContainer = document.getElementById("item-container");

const youOrder = document.getElementById("your-order");
const total = document.getElementById("total");

document.addEventListener("click", function (e) {
  if (e.target.dataset.share) {
    handleAddClick(e.target.dataset.share);
  } else if (e.target.id === "complete-button") {
    console.log("btn");
  }
});

const handleAddClick = (iconId) => {
  const targetMenuItem = menuArray.filter(function (item) {
    return item.id == iconId;
  });
  renderOrder(targetMenuItem);
};

// Rendering data.js
const reder = () => {
  const renderItems = menuArray
    .map((item) => {
      return `
        <div class="item" id="${item.id}">
            <img src="${item.image}" />
            <div class="item-content">
                <h2 class="text-xl">${item.name}</h2>
                <p class="text-secondary text-sm tracking-wider">beef, cheese, lettuce</p>
                <p>$${item.price}</p>
            </div>
            <i class="fa-solid fa-circle-plus icon" data-share=${item.id}></i>
        </div>
        `;
    })
    .join("");
  return renderItems;
};

itemContainer.innerHTML = reder();

// Order Popup Rendering

const totalPrice = [];

const renderOrder = (object) => {
  sectionTwo.style.display = "flex";

  const orderItem = object.map((item) => {
    totalPrice.push(item.price);
    return `
        <div class="order-item flex justify-between mb-2">
            <p id="item">${item.name}</p>
            <p id="cost">$${item.price}</p>
        </div>
        `;
  });
  youOrder.innerHTML += orderItem;

  const totalPriceDollas = totalPrice.reduce((item, currentItem) => {
    return item + currentItem;
  });
  total.textContent = `$${totalPriceDollas}`;
};

// form
const formHandle = (item) => {};
