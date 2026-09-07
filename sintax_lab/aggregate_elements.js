function aggregateElements(arr) {
    let sumOfNum = 0;
    let inverseSum = 0;
    let concatSum = '';
    for (let i = 0; i < arr.length; i++){
        sumOfNum += arr[i];
        inverseSum +=  1 / arr[i];
        concatSum += arr[i].toString();

    }
    console.log(sumOfNum);
    console.log(inverseSum);
    console.log(concatSum);
}
    
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16])