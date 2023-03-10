{


    const calculateTotal = (sum, currency) => {
        const rateEUR = 4.71;
        const rateDOL = 4.44;
        const rateGBP = 5.12;

        switch (currency) {
            case "EUR":
                return sum * rateEUR;

            case "DOL":
                return sum * rateDOL;

            case "GBP":
                return sum * rateGBP;
        }
    };
    const formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", () => {
            

        const sumElement = document.querySelector(".js-sum");
        const currencyElement = document.querySelector(".js-currency");
        const totalElement = document.querySelector(".js-total");

        const sum = sumElement.value;
        const currency = currencyElement.value;

        const total = calculateTotal(sum, currency)

        totalElement.innerText = total.toFixed(2);
    });
}
