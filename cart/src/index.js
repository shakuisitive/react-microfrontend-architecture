import faker from "faker";

let cartText = `<div>You have ${faker.random.number()} products in your cart.</div>`;

document.querySelector("#cart-dev").innerHTML = cartText;
