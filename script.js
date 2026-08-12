const name = document.getElementById("name");
const chooseFood = document.getElementById("chooseFood");
const quantity = document.getElementById("quantity");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const output = document.getElementById("output");

function placeOrder(event) {
  event.preventDefault();

  let price;

  if (chooseFood.value == "Hot Coffee") {
    price = 150;
  } else if (chooseFood.value == "Cappuccino") {
    price = 220;
  } else if (chooseFood.value == "Latte") {
    price = 200;
  } else if (chooseFood.value == "Chocolate Cake") {
    price = 250;
  } else if (chooseFood.value == "Cheesecake") {
    price = 300;
  } else if (chooseFood.value == "Brownie") {
    price = 180;
  } else if (chooseFood.value == "Cold Coffee") {
    price = 250;
  } else if (chooseFood.value == "Chocolate Shake") {
    price = 280;
  } else if (chooseFood.value == "Strawberry Shake") {
    price = 300;
  } else {
    price = 0;
  }

  let totalPrice = Number(quantity.value) * price;

  output.innerHTML =
    "Customer Name: " +
    name.value +
    "<br>Item Selected: " +
    chooseFood.value +
    "<br>Quantity: " +
    quantity.value +
    "<br>Unit Price: " +
    price +
    " Tk" +
    "<br>Total Price: " +
    totalPrice +
    " Tk";
}

submitBtn.addEventListener("click", placeOrder);

function resetValues() {
  output.innerHTML = "";
}

resetBtn.addEventListener("click", resetValues);