function processOddPositions(arr){
    let res = [];
    for(let i = 1; i < arr.length; i+=2){
        
        res.push(arr[i] * 2);
    }
    return res.reverse();
}

processOddPositions([10, 15, 20, 25])
processOddPositions([3, 0, 10, 4, 7, 3])
