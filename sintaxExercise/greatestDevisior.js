function findDevisior(num1, num2){
    let greatestDevisior = 1;
    for(let i = 1; i <= num1 && i <= num2; i++){
        if(num1 % i ===0 && num2 % i ===0){
            greatestDevisior = i;
        }
    }
    console.log(greatestDevisior);
}

findDevisior(2154, 458)