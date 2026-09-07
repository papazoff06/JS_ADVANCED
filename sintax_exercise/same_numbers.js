function sameNumbers(num){
    let strNum = num.toString();
    let sum = 0;
    let result = true;
    for (let i= 0; i < strNum.length; i++){
        sum += Number(strNum[i]);
        if(strNum[i] !== strNum[0]){
            result = false;
        }
        
    }
    console.log(result);
    console.log(sum);

}

sameNumbers(2222222);
sameNumbers(1234);
