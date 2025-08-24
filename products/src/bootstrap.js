import faker from "faker";

if (process.env.NODE_ENV === "development") {
  let el = document.querySelector("#dev-products");

  if (el) {
    // we can say we're running this in isolation,
    // not using our container
    mount(el);

    console.log("running in isolation");
  }
}

function mount(el) {
  let products = "";

  for (let i = 0; i < 10; i++) {
    let productName = faker.commerce.productName();
    products += `<div>${productName}</div>`;
  }

  el.innerHTML = products;
}

export { mount };
