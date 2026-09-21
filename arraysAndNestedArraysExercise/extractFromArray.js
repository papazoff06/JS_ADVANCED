function extractFromArray(arr){
    let res = [];
    
    for (let i = 0; i < arr.length; i++){
        if(res.length === 0){
            res.push(arr[0]);
        }else if(arr[i] >= res[res.length - 1]){
            res.push(arr[i])
        }
    }
    return res
}

extractFromArray([1, 
3, 
8, 
4, 
10, 
12, 
3, 
2, 
24]
)

extractFromArray([1, 
2, 
3,
4]
)

extractFromArray([20, 
3, 
2, 
15,
6, 
1]
)