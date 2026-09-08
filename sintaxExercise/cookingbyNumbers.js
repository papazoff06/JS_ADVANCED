function cookingbyNumbers(strNum, ...arr){
num = Number(strNum);
operations = {
    "chop": (num) => num / 2,
    "dice": (num) => Math.sqrt(num),
    "spice": (num) => num + 1,
    "bake": (num) => num * 3,
    "fillet": (num) => num * 0.8 
}
for(let i of arr){
    num = operations[i](num)
    console.log(num)
}
}



cookingbyNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingbyNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')