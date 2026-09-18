function biggestElement(mat){
    let res = -1000000000000000000000000000000000000;
    for(let el of mat){
        
        for(let num of el){
            if(num > res){
                res = num;
            }
        }

    }
    console.log(res)
}

biggestElement([[20, 50, 10],
 [8, 33, 145]]
)

biggestElement([[3, 5, 7, 12],
 [-1, 4, 33, 2],
 [8, 3, 0, 4]]
)