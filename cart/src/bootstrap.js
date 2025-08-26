import faker from "faker";

function mount(el) {
  let cartText = `<div>You have ${faker.random.number()} products in your cart.</div>`;
  el.innerHTML = cartText;
}

// See if we're running the project in development + and in isolation

if (process.env.NODE_ENV === "development") {
  let el = document.querySelector("#cart-dev");
  if (el) {
    mount(el);
  }
}

export { mount };
