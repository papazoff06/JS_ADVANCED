function negativePositiveNumbers(arr){
    let newArr = [];
    for(let i of arr){
        if(i < 0){
            newArr.unshift(i)
        }else
            newArr.push(i);
    }
    for(el  of newArr)
        console.log(el)
}



negativePositiveNumbers([7, -2, 8, 9])
negativePositiveNumbers([3, -2, 0, -1])