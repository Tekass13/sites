function computeVat(price, vat = 1.2)
{
	return price * vat;
}

function computePrice(lowVatPrices, highVatPrices) {
    let total = 0;
    for (let price of lowVatPrices) {
        total += computeVat(price, 1.1);
    }
    for (let price of highVatPrices) {
        total += computeVat(price);
    }
    return total;
}

console.log(computePrice([10, 15], [20]));
console.log(computePrice([13], [20, 50, 8]));
console.log(computePrice([20], [20]));
