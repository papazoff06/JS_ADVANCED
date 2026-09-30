function lowestPrices(arr){
    let result = {};
    for(let row of arr){
        let [townName, product, price] = row.split(' | ');
        price = Number(price);

        if(!result.hasOwnProperty(product)){
            result[product] = {townName, price}
        }
        if(price < result[product].price){
            result[product].townName = townName;
            result[product].price = price;
        }
    }
    for(let [key, value] of Object.entries(result))
        console.log(`${key} -> ${value.price} (${value.townName})`)

    

}

lowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)