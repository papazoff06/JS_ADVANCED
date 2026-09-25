function diagonalAttack(arr){
    let mat = [];
    for(let el = 0; el < arr.length; el++){
        let row = arr[el].split(' ').map(Number);
        mat.push(row)
    }
    let leftSumDiagonal = 0;
    let rightSumDiagonal = 0;
    
    for (let z = 0; z < mat.length; z++){
        leftSumDiagonal += mat[z][z];
        rightSumDiagonal +=mat[z][mat.length - 1  - z]
    }
    
    if(leftSumDiagonal === rightSumDiagonal){
        for (let r = 0; r < mat.length; r++){
        for(let c = 0; c < mat[r].length; c++){
        if (r !== c && r !== mat.length - 1 - c) {
                mat[r][c] = leftSumDiagonal;
            } 
        }  
    }
    }
    for(v of mat){
        console.log(...v)
}
}



diagonalAttack([
'5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
)

diagonalAttack([
'1 1 1',
'1 1 1',
'1 1 0']
)