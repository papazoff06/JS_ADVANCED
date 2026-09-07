function largestNumber(num1, num2, num3){
    let some_arr = [num1, num2, num3];
    let larg_num = Math.max(...some_arr);
    console.log(`The largest number is ${larg_num}.`)
}


largestNumber(5, -3, 16)
largestNumber(-3, -5, -22.5)