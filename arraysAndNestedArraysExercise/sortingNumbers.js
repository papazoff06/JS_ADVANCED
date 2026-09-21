function sortingNumbers(arr){
    arr.sort((a, b) => a - b);
    let res = [];
    while(arr.length > 0){
        let small = arr.shift();
        let big = arr.pop();
        res.push(small);
        res.push(big);
    }
    return res
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18])