function biggerHalf(arr){
    let sortedArr = arr.sort((a, b) => a - b);
    let start = sortedArr.length / 2;
    Math.ceil(start);
    let end = sortedArr.length; 
    return sortedArr.slice(start, end);
}

biggerHalf([4, 7, 2, 5])
biggerHalf([3, 19, 14, 7, 2, 19, 6])
