function storeCatalog(data){
    let result = {};
    for(let row of data){
    let [productName, productPrice] = row.split(' : ');
    result[productName] = Number(productPrice);
    }

    let sortedResult = Object.keys(result).sort((a, b) => a.localeCompare(b));
    let currentLetter = '';


    for (let product of sortedResult) {
        let firstLetter = product[0];

        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            console.log(currentLetter);
        }
        console.log(`  ${product}: ${result[product]}`);
    }
}

storeCatalog(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)

storeCatalog(["Banana : 2",
"Rubic's Cube : 5",
"Raspberry P : 4999",
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
)