function sumOfNums(n, m){
    let num_1 = Number(n);
    let num_2 = Number(m);
    let result = 0;
    for (let i = num_1; i <= num_2; i++){
        result += i;
    }
    console.log(result);
}

sumOfNums('1', '5' )
sumOfNums('-8', '20')