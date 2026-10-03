function smallestTwoNumbers(arr){
    let smallest = Infinity;
    let list = [];
    for (let el of arr){
        if (el < smallest){
            list.unshift(el)
            smallest = el;
        }else {
            list.push(el);
        }
    }
    let result = [list[0], list[1]];
    console.log(result.join(' '))
}


smallestTwoNumbers([30, 15, 50, 5])
smallestTwoNumbers([3, 0, 10, 4, 7, 3])