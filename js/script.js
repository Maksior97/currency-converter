let formElement = document.querySelector(".js-form");
let sumElement = document.querySelector(".js-sum");
let currencyElement = document.querySelector(".js-currency");
let totalElement = document.querySelector(".js-total");

formElement.addEventListener("input", () => {
    let sum = sumElement.value;
    let currency = currencyElement.value;

    let total = sum * currency;

    totalElement.innerText = total.toFixed(2);
});

