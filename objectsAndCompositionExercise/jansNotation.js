function jansNotation(arr) {
    let nums = [];
    for (let el of arr) {
        if (typeof el === 'number') {
            nums.push(el);
        }
        else {
            if (nums.length < 2) {
                console.log("Error: not enough operands!")
                return;
            } else
                function getResult(el) {
                    if (el === '+') {
                        return firstNum + secondNum;
                    }
                    else if (el === '-') {
                        return firstNum - secondNum;
                    }
                    else if (el === '*') {
                        return firstNum * secondNum;
                    }
                    else if (el === '/') {
                        return firstNum / secondNum;
                    }
                }
            let secondNum = nums.pop()
            let firstNum = nums.pop()
            let result = getResult(el);
            nums.push(result);
        }
    } if (nums.length > 1) {
        console.log("Error: too many operands!")

    } else {
        console.log(...nums)
    }
}

jansNotation([3,
    4,
    '+']
)
jansNotation([5,
    3,
    4,
    '*',
    '-']
)
jansNotation([15,
    '/']
)