function listOfNames(arr){
    arr.sort((a, b)=> a.localeCompare(b));
    let num = 1;
    for(let i = 0; i < arr.length; i++){
    console.log(`${num}.${arr[i]}`)
    num ++;
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"])