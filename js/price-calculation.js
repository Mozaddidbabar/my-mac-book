//common function
function convertValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.innerText;
    const amountValue = parseFloat(inputAmountText);
    return amountValue;
}
function setValue(inputId) {
    const inputField = document.getElementById(inputId);
    return inputField;

}
// when eight gb memory clicked
document.getElementById('eight-gb-um').addEventListener('click', function () {
    // setting value
    const memoryText = setValue('extra-memory-cost');
    memoryText.innerText = '00';
    // convertion
    const bestPriceInput = convertValue('best-price');
    const memoryCost = convertValue('extra-memory-cost');
    const storageCost = convertValue('extra-storage-cost');
    const deliveryCharge = convertValue('delivery-charge');
    const totalPriceInput = convertValue('total-price');
    // total price get value
    const totalPrice = setValue('total-price');
    // total price calculation = bestPrice + memoryCost + storageCost + deliveryCharge
    const newTotalPrice = bestPriceInput + memoryCost + storageCost + deliveryCharge;
    totalPrice.innerText = newTotalPrice;
    const finalTotalPrice = setValue('final-total-price');
    finalTotalPrice.innerText = newTotalPrice;
})
// when Sixteen gb memory clicked

document.getElementById('sixteen-gb-um').addEventListener('click', function () {
    // setting value
    const memoryText = setValue('extra-memory-cost');
    memoryText.innerText = '180';
    // convertion
    const bestPriceInput = convertValue('best-price');
    const memoryCost = convertValue('extra-memory-cost');
    const storageCost = convertValue('extra-storage-cost');
    const deliveryCharge = convertValue('delivery-charge');
    const totalPriceInput = convertValue('total-price');
    // total price get value
    const totalPrice = setValue('total-price');
    // total price calculation = bestPrice + memoryCost + storageCost + deliveryCharge
    const newTotalPrice = bestPriceInput + memoryCost + storageCost + deliveryCharge;
    totalPrice.innerText = newTotalPrice;
    const finalTotalPrice = setValue('final-total-price');
    finalTotalPrice.innerText = newTotalPrice;

})

// when two-fifty-six-ssd clicked

document.getElementById('two-fifty-six-ssd').addEventListener('click', function () {
    // setting value
    const storageText = setValue('extra-storage-cost');
    storageText.innerText = '00';

    // convertion
    const bestPriceInput = convertValue('best-price');
    const memoryCost = convertValue('extra-memory-cost');
    const storageCost = convertValue('extra-storage-cost');
    const deliveryCharge = convertValue('delivery-charge');
    const totalPriceInput = convertValue('total-price');
    // total price get value
    const totalPrice = setValue('total-price');
    // total price calculation = bestPrice + memoryCost + storageCost + deliveryCharge
    const newTotalPrice = bestPriceInput + memoryCost + storageCost + deliveryCharge;
    totalPrice.innerText = newTotalPrice;
    const finalTotalPrice = setValue('final-total-price');
    finalTotalPrice.innerText = newTotalPrice;

})
// when five-twelve-ssd clicked

document.getElementById('five-twelve-ssd').addEventListener('click', function () {
    // setting value
    const storageText = setValue('extra-storage-cost');
    storageText.innerText = '100';

    // convertion
    const bestPriceInput = convertValue('best-price');
    const memoryCost = convertValue('extra-memory-cost');
    const storageCost = convertValue('extra-storage-cost');
    const deliveryCharge = convertValue('delivery-charge');
    const totalPriceInput = convertValue('total-price');
    // total price get value
    const totalPrice = setValue('total-price');
    // total price calculation = bestPrice + memoryCost + storageCost + deliveryCharge
    const newTotalPrice = bestPriceInput + memoryCost + storageCost + deliveryCharge;
    totalPrice.innerText = newTotalPrice;
    const finalTotalPrice = setValue('final-total-price');
    finalTotalPrice.innerText = newTotalPrice;

})
// when one-tera-ssd clicked

document.getElementById('one-tera-ssd').addEventListener('click', function () {
    // setting value
    const storageText = setValue('extra-storage-cost');
    storageText.innerText = '180';

    // convertion
    const bestPriceInput = convertValue('best-price');
    const memoryCost = convertValue('extra-memory-cost');
    const storageCost = convertValue('extra-storage-cost');
    const deliveryCharge = convertValue('delivery-charge');
    const totalPriceInput = convertValue('total-price');
    // total price get value
    const totalPrice = setValue('total-price');
    // total price calculation = bestPrice + memoryCost + storageCost + deliveryCharge
    const newTotalPrice = bestPriceInput + memoryCost + storageCost + deliveryCharge;
    totalPrice.innerText = newTotalPrice;
    const finalTotalPrice = setValue('final-total-price');
    finalTotalPrice.innerText = newTotalPrice;

})
// when free-delivery is choosen

document.getElementById('free-delivery').addEventListener('click', function () {
    // setting value
    const deliveryChargeText = setValue('delivery-charge');
    deliveryChargeText.innerText = '00';

    // convertion
    const bestPriceInput = convertValue('best-price');
    const memoryCost = convertValue('extra-memory-cost');
    const storageCost = convertValue('extra-storage-cost');
    const deliveryCharge = convertValue('delivery-charge');
    const totalPriceInput = convertValue('total-price');
    // total price get value
    const totalPrice = setValue('total-price');
    // total price calculation = bestPrice + memoryCost + storageCost + deliveryCharge
    const newTotalPrice = bestPriceInput + memoryCost + storageCost + deliveryCharge;
    totalPrice.innerText = newTotalPrice;
    const finalTotalPrice = setValue('final-total-price');
    finalTotalPrice.innerText = newTotalPrice;

})
// when twenty-dollar-delivery is choosen

document.getElementById('twenty-dollar-delivery').addEventListener('click', function () {
    // setting value
    const deliveryChargeText = setValue('delivery-charge');
    deliveryChargeText.innerText = '20';

    // convertion
    const bestPriceInput = convertValue('best-price');
    const memoryCost = convertValue('extra-memory-cost');
    const storageCost = convertValue('extra-storage-cost');
    const deliveryCharge = convertValue('delivery-charge');
    const totalPriceInput = convertValue('total-price');
    // total price get value
    const totalPrice = setValue('total-price');
    // total price calculation = bestPrice + memoryCost + storageCost + deliveryCharge
    const newTotalPrice = bestPriceInput + memoryCost + storageCost + deliveryCharge;
    totalPrice.innerText = newTotalPrice;
    const finalTotalPrice = setValue('final-total-price');
    finalTotalPrice.innerText = newTotalPrice;

})

// promo code matching
document.getElementById('promo-code-button').addEventListener('click', function () {
    const promoCodeText = document.getElementById('promo-code');
    const promoCodeInput = promoCodeText.value;
    if (promoCodeInput == "stevekaku") {
        const totalPrice = setValue('total-price');
        const finalTotalPrice = setValue('final-total-price');
        const totalPriceInput = convertValue('total-price');
        const reducedValue = (totalPriceInput * 20) / 100;
        finalTotalPrice.innerText = totalPriceInput - reducedValue;
    }
    else {
        const totalPrice = setValue('total-price');
        const finalTotalPrice = setValue('final-total-price');
        const totalPriceInput = convertValue('total-price');
        finalTotalPrice.innerText = totalPriceInput;
    }
})