function calcFruit(typeFruit, weightFruit, priceFruit) {
    let totalPrice = (weightFruit / 1000) * priceFruit;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${ (weightFruit / 1000).toFixed(2) } kilograms ${typeFruit}.`);
}



calcFruit('orange', 2500, 1.80);
calcFruit('apple', 1563, 2.350);