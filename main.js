import { menuArray } from "./data.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";
const sectionTwo = document.getElementById("section-two");
sectionTwo.style.display = "none";

const itemContainer = document.getElementById("item-container");

const youOrder = document.getElementById("your-order");
const total = document.getElementById("total");

const form = document.getElementById("form");
const formdiv = document.getElementById("formdiv");

const spanThankEnd = document.getElementById("span-thank-end");
spanThankEnd.style.display = "none";

document.addEventListener("click", function (e) {
  if (e.target.dataset.share) {
    handleAddClick(e.target.dataset.share);
  } else if (e.target.id === "complete-button") {
    formHandle();
  } else if (e.target.dataset.item) {
    handleRemoveClick(e.target.dataset.item);
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const payFormData = new FormData(form); //storing data from form in this variable
  const name = payFormData.get("name");

  spanThankEnd.style.display = "flex";

  //Clearing
  const cardName = (document.getElementById("card-name").value = "");
  const cardNumber = (document.getElementById("card-number").value = "");
  const cardCvv = (document.getElementById("card-cvv").value = "");
  youOrder.innerHTML = "";

  spanThankEnd.textContent = `Thanks, ${name}! Your order is on its way!`;
});

let shoppingCard = [];

const handleAddClick = (iconId) => {
  const targetMenuItem = menuArray.find((item) => item.id == iconId); // Use find to get the item directly
  if (targetMenuItem) {
    const itemWithUUID = { ...targetMenuItem, uuid: uuidv4() }; // Assign UUID here
    shoppingCard.push(itemWithUUID);

    totalPrice.push(targetMenuItem.price); // Update totalPrice here
    renderOrder(shoppingCard);
  }
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

let totalPrice = [0];

const renderOrder = (object) => {
  sectionTwo.style.display = "flex";

  const orderItem = object
    .map((item) => {
      return `
        <div class="order-item flex justify-between mb-2">
            <p id="item" class="item-in-basket" data-item="${item.uuid}">${item.name}</p>
            <p id="cost">$${item.price}</p>
        </div>
        `;
    })
    .join("");
  youOrder.innerHTML = orderItem;
  totalPirce();
};

const totalPirce = () => {
  const totalPriceDollars = totalPrice.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
  total.textContent = `$${totalPriceDollars}`;
  //console.log(totalPrice);
};

//deleting

const handleRemoveClick = (uuid) => {
  console.log(uuid);
  shoppingCard = shoppingCard.filter((item) => item.uuid !== uuid); // Use filter to remove the item

  // Recalculate totalPrice based on the updated shoppingCard
  totalPrice = shoppingCard.map((item) => item.price);
  renderOrder(shoppingCard);
  if (totalPrice.length === 0) {
    sectionTwo.style.display = "none";
  }
};

// form
const formHandle = () => {
  console.log("test");
  formdiv.style.display = "flex";

  const paybtn = document.getElementById("pay");

  paybtn.addEventListener("click", function () {
    formdiv.style.display = "none";
    sectionTwo.style.display = "none";
    totalPirce = [];
  });
};
